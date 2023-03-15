/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */
const Tweet = require("../models/Tweet");
const User = require("../models/User");

// Home Render
async function showHome(req, res) {
  const allTweets = await Tweet.find({ userId: { $in: req.user.following } })
    .populate("userId")
    .sort({ createdAt: "desc" });

  return res.render("pages/home", { allTweets });
}

// Likes Button
async function showLike(req, res) {
  const likes = [];
  for (let i = 0; i < likes.length; i++) {
    if (likes[i] === req.session.passport.user) {
      likes.slice(i);
    } else {
      likes.push(req.session.passport.user);
    }
  }
  res.redirect("/home");
}

// Profile Render
async function showUserProfile(req, res) {
  const allTweets = await Tweet.find().populate("userId");
  const user = await User.find({ id: req.user });
  return res.render("pages/profile", { allTweets, user });
}

// Login Render
async function showLogin(req, res) {
  res.render("pages/login");
}

// Register Render
async function showRegister(req, res) {
  res.render("pages/register");
}

async function show404(req, res) {
  res.status(404).render("pages/404");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showLike,
  showUserProfile,
  showLogin,
  showRegister,
};
