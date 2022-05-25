import { Container, Grid } from "@mui/material"

import { useAppSelector } from "../../store/store"

export default function GamesPage() {

    const { games } = useAppSelector(state => state.games)
    return (
        

        <Container>
            <h2 className="H2">Karibu Futaa</h2>
            <Grid container >
                {games && games.map(game => (
                    <><Grid key={game._id} xs={3} sx={{
                        backgroundImage: 'linear-gradient(90deg, #588880, #bdbddb)'
                    }}>
                        <h4>Location:{game.address}</h4>
                        <li>
                        {game.time}
                        </li>
                        <p>
                        Number Of People: {game.numberOfPeople}
                        </p>
                    </Grid></>
                    
                ))}
            </Grid>
        </Container>
         )
}