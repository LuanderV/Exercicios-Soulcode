import express from 'express';
import { Contato } from '../models/contato.js';
import { contatoValidation } from '../utils/validations.js';

const router = express.Router();

// INSERÇÃO DE CONTATO [POST]
router.post("/contato", async (req, res) => {
  const { error, value } = contatoValidation.validate(req.body, { abortEarly: false });

  if(error) {
    res.status(400).json({message: "Dados inválidos", error: error.details});
    return;
  }

  const { nome, sobrenome, email, telefone, observacoes, favorito } = value;

  try {
    const novoContato = new Contato({
      nome,
      sobrenome,
      email,
      telefone,
      observacoes,
      favorito,
    });
    await novoContato.save();
    res.json({ message: "Contato criado com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao adicionar contato", error: err });
  }
});

// LISTAGEM DE CONTATOS [GET]
router.get("/contato", async (req, res) => {
  const lista = await Contato.find();
  res.json(lista);
});

router.get("/contato/:id", async (req, res) => {
  const contato = await Contato.findById(req.params.id).select("-__v");

  if (contato) {
    res.json(contato);
  } else {
    res.status(404).json({ message: "Contato não encontrado." });
  }
});

// ATUALIZAÇÃO DE CONTATO [PUT]
router.put("/contato/:id", async (req, res) => {
  const { error, value } = contatoValidation.validate(req.body, { abortEarly: false });

  if(error) {
    res.status(400).json({message: "Dados inválidos", error: error.details});
    return;
  }

  const { nome, sobrenome, email, telefone, observacoes, favorito } = value;

  try {
    const contato = await Contato.findByIdAndUpdate(req.params.id, {
      nome,
      sobrenome,
      email,
      telefone,
      observacoes,
      favorito,
    });

    if (contato) {
      res.json({ message: "Contato atualizado com sucesso." });
    } else {
      res.status(404).json({ message: "Contato não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao atualizar", error: err });
  }
});

// REMOÇÃO DE CONTATO [DELETE]
router.delete("/contato/:id", async (req, res) => {
  try {
    const contato = await Contato.findByIdAndDelete(req.params.id);

    if (contato) {
      res.json({ message: "Contato removido com sucesso." });
    } else {
      res.status(404).json({ message: "Contato não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao remover", error: err });
  }
});

export default router;
