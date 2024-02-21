import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
const App = () => {
  const movieslist = [
    {
      "id": 1,
      "name": "Transformers: La venganza de los Caídos",
      "director": "Michael Bay",
      "url": "https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg",
      "description": "En esta entrega de la saga Transformers, los Autobots se enfrentan a una nueva amenaza mientras intentan proteger a la humanidad de los Decepticons."
    },
    {
      "id": 2,
      "name": "Cars",
      "director": "Disney",
      "url": "https://m.media-amazon.com/images/I/71Aw2q8VpeL._AC_UF894,1000_QL80_.jpg",
      "description": "En un mundo poblado por automóviles vivientes, un auto de carreras arrogante aprende lecciones valiosas sobre la amistad y la humildad en una ciudad olvidada en la Ruta 66."
    },
    {
      "id": 3,
      "name": "Avengers",
      "director": "Disney",
      "url": "https://cdn.marvel.com/u/prod/marvel/i/mg/b/03/54982b4953b05/clean.jpg",
      "description": "Los superhéroes más poderosos de la Tierra se unen para enfrentarse a una amenaza sin precedentes y salvar al mundo de la destrucción."
    },
    {
      "id": 4,
      "name": "El Laberinto del Fauno",
      "director": "Guillermo del Toro",
      "url": "https://pics.filmaffinity.com/El_laberinto_del_fauno-985415492-large.jpg",
    },
    {
      "id": 5,
      "name": "Inception",
      "director": "Christopher Nolan",
      "url": "https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg",
      
    },
    {
      "id": 6,
      "name": "The Godfather",
      "director": "Francis Ford Coppola",
      "url": "https://m.media-amazon.com/images/I/81fc+fWtALL._AC_UF894,1000_QL80_.jpg",
     },
    {
      "id": 7,
      "name": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "url": "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg",
   },
    {
      "id": 8,
      "name": "Pacific Rim",
      "director": "Guillermo del Toro",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Pacific_Rim_FilmPoster.jpeg/220px-Pacific_Rim_FilmPoster.jpeg",
   },
    {
      "id": 9,
      "name": "The Dark Knight",
      "director": "Christopher Nolan",
      "url": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
   },
    {
      "id": 10,
      "name": "Forrest Gump",
      "director": "Robert Zemeckis",
      "url": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
   }
  ];
  const [movies, setMovies] = useState(movieslist);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.StTitle}>
        <Text style={Styles.title}>Welcome to Movies App!</Text>
      </View>
      <View style={Styles.StMovie}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={Styles.card}>
              <Image source={{ uri: item.url }} style={Styles.image} />
              <View style={Styles.cardtxt}>
                <Text style={Styles.txtTitle}>{item.name}</Text>
                <Text style={Styles.txtDir}>{item.director}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: "#ffff",
    fontWeight: "bold",
    marginTop: 50,
    
  },
  StTitle: {
    flex: 0.5,
  },
  StMovie: {
    flex: 4,
  },
  card: {
    flexDirection: "row",
    width:'100%',
    margin:10
  },
  cardtxt:{
    flexDirection:'column',
    width:'100%'
  },
  image: {
    width: 100,
    height: 150, 
    resizeMode: "cover", 
  },
  txtTitle: {
    fontSize: 16,
    color: "#ffff",
    fontWeight: "bold",
    maxWidth:'100%',
    margin:10
  },
  txtDir: {
    fontSize: 14,
    color: "#ffff",
    margin:10
  },
 
  flatcont: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
