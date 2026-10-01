// ============================================================
//  API DE PLAYLIST  -  Relacionando Musicas e Artistas
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete os TODOs.
// ============================================================

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// ---- LISTA 1: artistas (cada um tem um id) ----

const artistas = [
  { id: 1, nome: "John Cooper", pais: "EUA" },
  { id: 2, nome: "Korey Cooper", pais: "Reino Unido" },
  { id: 3, nome: "Seth Morrison", pais: "EUA" },
  { id: 4, nome: "Jen Ledger", pais: "EUA" },
];

// ---- LISTA 2: musicas (guardam so o artistaId, nao o nome) ----


const musicas = [
  { id: 1, titulo: "Monster", artistaId: 1, duracao: 300 },
  { id: 2, titulo: "Hero", artistaId: 2, duracao: 533 },
  { id: 3, titulo: "Feel Invincible", artistaId: 1, duracao: 240 },
  { id: 4, titulo: "Awake and Alive", artistaId: 1, duracao: 600 },
  { id: 5, titulo: "Burn Out", artistaId: 1, duracao: 320 },
  { id: 6, titulo: "The Resistance", artistaId: 1, duracao: 240 },
];

// 1) LISTAR ARTISTAS

app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

app.get("/musicas", (req, res) => {
  const resultado = musicas.map((m) => {
    const artistaEncontrado = artistas.find((a) => a.id === m.artistaId);

    return {
      titulo: m.titulo,
      duracao: m.duracao,
      artista: artistaEncontrado ? artistaEncontrado.nome : "Desconhecido",
      pais: artistaEncontrado ? artistaEncontrado.pais : "-",
    };
  });

  res.status(200).json(resultado);
});




// 2) LISTAR MUSICAS  (juntando cada musica com o seu artista)

app.get("/musicas", (req, res) => {
  const resultado = musicas.map((m) => {
    const artistaEncontrado = artistas.find((a) => a.id === m.artistaId);

    return {
      titulo: m.titulo,
      duracao: m.duracao,
      artista: artistaEncontrado ? artistaEncontrado.nome : "Desconhecido",
      pais: artistaEncontrado ? artistaEncontrado.pais : "-",
    };
  });

  res.status(200).json(resultado);
});

app.get("/artistas/:id", (req, res) => {
  const id = Number(req.params.id);
  const artista = artistas.find((m) => m.artistId === id);
  res.status(200).json(artista);
});

app.listen(PORT, () => {
  console.log(`Playlist no arhttp://localhost:${PORT}`);
});


  // TODO: use map para percorrer 'musicas'.
  //       para cada musica, use find em 'artistas' para achar
  //       aquele cujo id === m.artistaId.
  //       devolva um objeto com: titulo, duracao, artista (nome) e pais.
  //       lembre: find pode devolver undefined -> trat

  


