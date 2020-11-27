import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import axios from 'axios';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: "",
    cep: "", 
    street: "", district: "", 
    city: "", 
    uf: ""
  });

  const { name, email, phone, cep, street, district, city, uf } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await api.post("/users/add", user);
    history.push("/");
  };

  const onBlurCep = async () => {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const { logradouro, bairro, localidade, uf } = result.data;

    setUser({
      street: logradouro,
      district: bairro,
      city: localidade, 
      uf
    });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Adicionar usuário</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Telefone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group w-75">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="CEP"
              name="cep"
              value={cep}
              onChange={e => onInputChange(e)}
              onBlur={(e) => onBlurCep(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Rua"
              name="street"
              value={street}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Bairro"
              name="district"
              value={district}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Cidade"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group w-25">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="UF"
              name="uf"
              value={uf}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;