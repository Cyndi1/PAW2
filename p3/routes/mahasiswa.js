const express = require("express");
const mahasiswaRouter = express.Router();

mahasiswaRouter
  .route("/")
  .get((req, res) => {
    res.send("Get Data Mahasiswa");
  })
  .post((req, res) => {
    res.send("Post Mahasiswa");
  });

mahasiswaRouter
  .route("/:npm")
  .put((req, res) => {
    res.send("Put Mahasiswa " + req.params.npm);
  })
  .delete((req, res) => {
    res.send("Delete Mahasiswa " + req.params.npm);
  });

mahasiswaRouter.route("/kelas").get((req, res) => {
  const kelas = req.query.idkelas;
  res.send("Kelasnya adalah " + kelas);
});
// cara mannggil localhost:3000/mahasiswa/kelas?idkelas=SI5B

module.exports = mahasiswaRouter;
