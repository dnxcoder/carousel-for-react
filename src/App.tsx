import "./App.css";
import Carousel from "./components/Carousel";
import { Screen, Title } from "./styles";

function App() {
  return (
    <Screen>
      <Carousel
        itemStyle={{
          width: 300,
          height: 500,
          colorBase: "tomato",
        }}
        images={[
          "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_4x3.png",
          "https://s.aficionados.com.br/imagens/kakashi-3_cke.jpg",
          "https://s.aficionados.com.br/imagens/sasuke-0_cke.jpg",
          "https://dicadadiversao.com.br/wp-content/uploads/narutoa.jpg",
          "https://s.aficionados.com.br/imagens/jiraya-0.jpg",
        ]}
      ></Carousel>
    </Screen>
  );
}

export default App;
