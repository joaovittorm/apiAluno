const express = require('express');
const router = express.Router();

let alunos = [];

router.post('/', (req, res) => {
  const { nome, email, nome_curso } = req.body;
  const id = alunos.length + 1;
  const novoAluno = { id, nome, email, nome_curso };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

router.get('/', (req, res) => {
  res.json(alunos);
});

router.get('/:id', (req, res) => {
  const aluno = alunos.find((al) => al.id === parseInt(req.params.id));
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
});


router.put('/:id', (req, res) => {
  const { nome, email, nome_curso } = req.body;
  const aluno = alunos.find((al) => al.id === parseInt(req.params.id));

  if (aluno) {
    aluno.nome = nome || aluno.nome;
    aluno.email = email || aluno.email;
    aluno.nome_curso = nome_curso || aluno.nome_curso;
    res.json(aluno);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
});


router.delete('/:id', (req, res) => {
  const alunoIndex = alunos.findIndex((al) => al.id === parseInt(req.params.id));

  if (alunoIndex >= 0) {
    alunos.splice(alunoIndex, 1);
    res.json({ message: 'Aluno excluído com sucesso' });
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
});

module.exports = router;
