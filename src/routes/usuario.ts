import { Router } from "express";

export const routerUsuario = Router();

/**
 * Cria rota padrão
 */

routerUsuario.get('/', (req, res) => {
  res.send('Serviços de usuário')
  });