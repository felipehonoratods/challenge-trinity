import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: "",
    cep: "", 
    street: "", district: "", 
    city: "", 
    uf: ""
  });

  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      const res = await api.get(`/users/${id}`);
      setUser(res.data.user);
    };

    loadUser();
  }, [id]);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Voltar
      </Link>
      <h1 className="display-4">Usuário Id: {id}</h1>
      <hr />
      <ul key={id} className="list-group w-50">
        <li className="list-group-item">Nome: {user.name}</li>
        <li className="list-group-item">E-mail: {user.email}</li>
        <li className="list-group-item">Telefone: {user.phone}</li>
        <li className="list-group-item">CEP: {user.cep}</li>
        <li className="list-group-item">Rua: {user.street}</li>
        <li className="list-group-item">Bairro: {user.district}</li>
        <li className="list-group-item">Cidade: {user.city}</li>
        <li className="list-group-item">UF: {user.uf}</li>
      </ul>
    </div>
  );
};

export default User;