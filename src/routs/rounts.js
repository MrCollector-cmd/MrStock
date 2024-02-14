import express from "express";
import { pool } from "../conect/conect.js";

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