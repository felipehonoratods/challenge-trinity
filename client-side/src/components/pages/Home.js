import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../services/api';

import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await api.get("/users");
    
    setUsers(response.data.users);
  };

  const deleteUser = async id => {
    await api.delete(`/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container-table">
      <div className="py-4">
        <h1>Lista de usuários</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">CEP</th>
              <th scope="col">Rua</th>
              <th scope="col">Bairro</th>
              <th scope="col">Cidade</th>
              <th scope="col">UF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.cep}</td>
                <td>{user.street}</td>
                <td>{user.district}</td>
                <td>{user.city}</td>
                <td>{user.uf}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    Visualizar
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Editar
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Deletar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  );
}