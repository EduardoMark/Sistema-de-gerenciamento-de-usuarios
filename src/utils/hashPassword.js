const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error(`Error ao tentar fazer o hash da senha: ${error.message}`);
        throw new Error("Falha no hashing");
    }
}

module.exports = hashPassword;