import { useEffect, useState } from "react";
import { buildAuthorization, getUserCompletedGames, getUserProfile } from "@retroachievements/api";



const RetroAchievements = () => {
  const [myProfile, setMyProfile] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const username = "GerardMarte";
  const webApiKey = process.env.REACT_APP_RETRO_API_KEY || "nEX0gJpSEk81UCCYrpIoibwWazOWx5AU"; 

//   useEffect(() => {
//     // Verifica a chave de API dentro do useEffect para garantir que não altere a ordem dos hooks
//     if (!webApiKey) {
//       setError("Chave de API não encontrada.");
//       setLoading(false);  // Parar o carregamento
//       return;  // Impede a execução do restante do código
//     }

//     const fetchProfile = async () => {
//       try {
//         const authorization = buildAuthorization({ username, webApiKey });
//         const dataProfile = await getUserProfile(authorization, { username });

//         // Se a resposta contiver os dados esperados
//         if (dataProfile) {
//             setMyProfile(dataProfile);
//         } else {
//             setError("Erro: Dados de Perfil.");
//         }
          
//         setLoading(false);
//       } catch (err) {
//         setError("Erro ao carregar Perfil.")
//         setLoading(false);
//       }
//     };
    

//     fetchProfile();
//   }, [username, webApiKey]); // Apenas dependências necessárias

  
//   if (loading) return <p>Carregando jogos completados...</p>;
//   if (error) return <p>{error}</p>;

//   console.log(myProfile)

  return (
    // <div>
    // <h1>Jogos Completados de {username}</h1>
    // <ul>
    //     {completedGames.map((game: any) => (
    //     <li key={game.imageicon} className="">
    //         <img src={game.imageIcon} alt={game.title} />
    //         <h3>{game.title}</h3>
    //         <p>{game.consoleName}</p> {/* Ou outro campo para a descrição */}
    //     </li>
    //     ))}
    // </ul>
    // </div>

    <div>
        {myProfile}
    </div>
  );
};

export default RetroAchievements;
