import { pool } from "../db.js";
//funciones de la ruta empleados
export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT*FROM empleados");
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ mensaje: "Algo salio mal" });
  }
};
export const getEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT*FROM empleados WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ mensaje: "No se encontro el empleado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: "Algo salio mal" });
  }
};
export const postEmpleado = async (req, res) => {
  const { nombre, salario } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO empleados(nombre, salario) VALUES(?, ?)",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: "Algo salio mal" });
  }
};

export const putEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, salario } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE empleados SET nombre= IFNULL(?, nombre), salario=IFNULL(?, salario) WHERE id=?",
      [nombre, salario, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });
    }
    const [row] = await pool.query("SELECT*FROM empleados WHERE id=?", [id]);
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: "Algo salio mal" });
  }
};
export const deleteEmpelado = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: "Algo salio mal" });
  }
};
