const User = require('../models/User');

module.exports = {
  async index(req, res) {

    const users = await User.findAll();

    if (users == "" || users == null) {
        return res.status(200).send({ message: "Nenhum usuário cadastrado" });

    }

    return res.status(200).send({ users });

  },

  async store(req, res) {

    const { name, email, phone, cep, street, district, city, uf } = req.body;

    const user = await User.create({ name, email, phone, cep, street, district, city, uf });

    return res.status(200).send({
      status: 1,
      message: 'usuário cadastrado com sucesso!',
      user
    });

  },

  async show(req, res) {
    const { user_email } = req.params;

    const user = await User.findAll({
      where: {
        email: user_email
      }
    })

    return res.status(200).send({ user });
  },

  async update(req, res) {

    const { name, email, phone, cep, street, district, city, uf } = req.body;

    const { user_id } = req.params;

    await User.update({
      name, email, phone, cep, street, district, city, uf
    }, {
        where: {
          id: user_id
        }
    });

    return res.status(200).send({
        status: 1,
        message: "Usuário atualizado com sucesso!",
    });

  },

  async delete(req, res) {

    const { user_id } = req.params;

    await User.destroy({
        where: {
            id: user_id
        }
    });

    return res.status(200).send({
        status: 1,
        message: "Usuário deletado com sucesso!",
    });

  }
};