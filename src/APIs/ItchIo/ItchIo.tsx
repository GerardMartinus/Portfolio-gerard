import { useEffect, useState } from "react";

interface Game {
  id: number;
  title: string;
  url: string;
  cover_url: string;
}

const ItchGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const username = process.env.REACT_APP_ITCH_USERNAME;
    const apiKey = process.env.REACT_APP_ITCH_API_KEY;

    useEffect(() => {
        if (!username || !apiKey) {
        setError("Erro: Chave da API ou nome de usuário não encontrados.");
        setLoading(false);
        return;
        }

        const fetchGames = async () => {
        try {
            const response = await fetch(
            `https://itch.io/api/1/${apiKey}/my-games`
            );

            if (!response.ok) {
            throw new Error("Erro ao buscar os jogos.");
            }

            const data = await response.json();
            if (data.games) {
            setGames(data.games);
            } else {
            throw new Error("Nenhum jogo encontrado.");
            }
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
        };

        fetchGames();
    }, [username, apiKey]);

    if (loading) return <p>Carregando jogos...</p>;
    if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Meus Jogos no Itch.io</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <a href={game.url} target="_blank" rel="noopener noreferrer">
              <img src={game.cover_url} alt={game.title} width="200" />
              <p>{game.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItchGames;
