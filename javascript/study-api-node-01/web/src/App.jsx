import React, { useState, useEffect } from 'react';
import './App.css'; // Mantenha o arquivo CSS se quiser o estilo base

// ⚠️ IMPORTANTE: Ajuste a porta se o seu backend não estiver na 3000
const API_URL = 'http://localhost:3000/';

function App() {
  // 1. Estado para armazenar os dados da API
  const [items, setItems] = useState([]);
  // 2. Estado para indicar se estamos carregando (opcional, mas bom para UX)
  const [loading, setLoading] = useState(true);
  // 3. Estado para armazenar erros
  const [error, setError] = useState(null);

  // useEffect é usado para executar o código DEPOIS que o componente renderiza
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        
        // Verifica se a resposta foi bem-sucedida (ex: status 200)
        if (!response.ok) {
          // Lança um erro se o status for 4xx ou 5xx
          throw new Error(`Erro ao buscar dados: Status ${response.status}`);
        }
        
        const data = await response.json();
        setItems(data); // Atualiza o estado com os dados da API
      } catch (err) {
        // Captura e armazena qualquer erro de rede ou de resposta HTTP
        setError(err.message);
      } finally {
        // Garante que o estado de carregamento seja desativado, independente do sucesso/erro
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // O array vazio garante que a função é executada APENAS uma vez (ao montar o componente)

  // --- Lógica de Renderização Condicional ---

  if (loading) {
    return <h1>Carregando itens...</h1>;
  }

  if (error) {
    return <h1>Erro: {error}. Verifique se o seu backend está rodando em {API_URL} e se o CORS está configurado.</h1>;
  }

  return (
    <div className="App">
      <h1>Lista de Itens da API Node.js 🚀</h1>
      
      {items.length === 0 ? (
        <p>Nenhum item encontrado.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id} <br/>
              <strong>Nome:</strong> {item.name} <br/>
              <strong>Preço:</strong> R$ {item.price}
            </li>
          ))}
        </ul>
      )}

      <p className="read-the-docs">
        Se a lista acima aparecer, a conexão com sua API está funcionando!
      </p>
    </div>
  );
}

export default App;