module.exports = {
  index(req, res) {
    const cursos = [
      {
        name: "javascript",
      },
      {
        name: "python",
      },
    ];

    return res.json(cursos);
  },
};
