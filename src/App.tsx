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
          "https://images.pexels.com/photos/3226586/pexels-photo-3226586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/4450115/pexels-photo-4450115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/8487441/pexels-photo-8487441.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/9210494/pexels-photo-9210494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/8193431/pexels-photo-8193431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ]}
      ></Carousel>
    </Screen>
  );
}

export default App;
