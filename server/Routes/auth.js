const express = require("express");

const {
  donorSignUp,
  donorLogin,
  agentLogin,
  agentSignUp,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post('/donorSignUp',donorSignUp);
router.post('/donorLogin',donorLogin);
router.post('/agentSignUp',agentSignUp);
router.post('/agentLogin',agentLogin);

module.exports= router; 