import express from "express";
import { pool } from "../conect/conect.js";
import xl from "excel4node";
import path from 'path'
import { fileURLToPath } from 'url';
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{header:"partials/header",head:"partials/head"});
});
router.get('/index',(req,res)=>{
    res.render('index');
});
router.get('/getStock',(req,res)=>{
    try {
        pool.query('SELECT * FROM stockpela',function(err,result) {
            if(err) throw err;
            res.send(result);
        });
    } catch (error) {
        throw error;
    }
});
router.get('/downloadStock',(req,res)=>{
    try {
        pool.query('SELECT * FROM stockpela',function(err,result) {
            if(err) throw err;
            function downloadEx(array) {
                var wb = new xl.Workbook();
            
                // Add Worksheets to the workbook
                var ws = wb.addWorksheet('Sheet 1');
            
                // Create a reusable style
                var styleNumbs = wb.createStyle({
                font: {
                    color: '#FF0800',
                    size: 12,
                },
                numberFormat: '#,##0.00; (#,##0.00); -',
                });
                var styleText = wb.createStyle({
                    font: {
                        background: '#FF0800',
                        size: 12,
                    }
                    });
                // Set value of cell A1 to 100 as a number type styled with paramaters of style
                ws.cell(1, 1)
                .string('Nombre')
                .style(styleText);
            
                // Set value of cell B1 to 200 as a number type styled with paramaters of style
                ws.cell(1, 2)
                .string('Cantidad')
                .style(styleText);
            
                // Set value of cell C1 to a formula styled with paramaters of style
                ws.cell(1, 3)
                .string('Unidad')
                .style(styleText);
            
                // Set value of cell A2 to 'string' styled with paramaters of style
                ws.cell(1, 4)
                .string('Fecha')
                .style(styleText);
                array.forEach((elem,i) => {
                    ws.cell(i+2, 1)
                    .string(elem.nombre)
                    .style(styleText);
            
                    ws.cell(i+2, 2)
                    .number(elem.cantidad)
                    .style(styleText);
            
                    ws.cell(i+2, 3)
                    .string(elem.unidad)
                    .style(styleText);
                });
            
                const pathEx = path.join(__dirname,'\\exel\\stock.xlsx')
                console.log(pathEx);
                wb.write(pathEx,function(err,stats) {
                    if (err) {
                        console.error(err)
                    } else {
                        res.download(pathEx,function(err) {
                            if(err)console.error(err)
                        })
                        // fs.rm(pathEx,function(err) {
                        //     if(err)console.log(err)
                        //     else{
                        //         console.log('correcto!')
                        //     }
                        // })
                    }
                })
            };
            downloadEx(result);
                });
            } catch (error) {
                throw error;
            }
        });
router.get('/getOrders',(req,res)=>{
    try {
        pool.query(`select id_pedido,nombre,cantidad,(select unidad from stockpela s where nombre = p.nombre) as unidad from pedidopela p`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    } catch (error) {
        throw error;
    };
});
router.post('/insert',(req,res)=>{
    let dat = req.body;
    try {
        pool.query(
        `INSERT INTO stockpela(nombre,cantidad,unidad)
        VALUES('${dat.nombre}',${dat.cantidad},'${dat.unidad}')`,function(err, result){
            if(err)throw err;
            res.send(result);
        });
    } catch (error) {
        throw error;
    }
});
router.post('/count',(req,res)=>{
    let dat = req.body;
    try {
        pool.query(`
        UPDATE stockpela 
        SET cantidad = (SELECT cantidad AS cant_old FROM stockpela s WHERE nombre = '${dat.nombre}') + ${dat.cantidad} WHERE nombre = '${dat.nombre}'`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        });  
    } catch (error) {
        throw error;
    }
});
router.post('/discount',(req,res)=>{
    let dat = req.body;
    try {
        pool.query(`
        UPDATE stockpela 
        SET cantidad = (SELECT cantidad AS cant_old FROM stockpela s WHERE nombre = '${dat.nombre}') - ${dat.cantidad} WHERE nombre = '${dat.nombre}';`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        });
    } catch (error) {
        throw error;
    }
});
router.post('/order',(req,res)=>{
    let dat = req.body;
    try {
        pool.query(`
        INSERT INTO pedidopela (nombre,cantidad) 
        VALUES ("${dat.nombre}",${dat.cantidad})`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    } catch (error) {
        throw error;
    }
});
router.post('/deleteOrder',(req,res)=>{
    let dat = req.body;
    try {
        pool.query(`
        DELETE FROM pedidopela WHERE id_pedido = ${dat.id_pedido}`,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    } catch (error) {
        throw error;
    }
});
router.post('/countOrder',(req,res)=>{
    let dat = req.body;
    let ac = [];
    console.log(dat)
    try {
        pool.query(`
        UPDATE stockpela 
        SET cantidad = (SELECT cantidad AS cant_old FROM stockpela s WHERE nombre = '${dat.nombre}') + ${dat.cantidad} WHERE nombre = '${dat.nombre}'
        `,(err,result)=>{
            if(err) throw err;
            ac.push(result);
        });
        pool.query(`
        DELETE FROM pedidopela WHERE id_pedido = ${dat.id_pedido}`,(err,result)=>{
            if(err) throw err;
            ac.push(result);
            res.send(ac);
        })
    } catch (error) {
        throw error;
    }
});
export {router};