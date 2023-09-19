import { pokemonApiMock } from "./mocks/pokemonMock";
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios'; // temos que importar o módulo aqui também
import Pokecard from "../components/Pokecard";

jest.mock('axios')
const openModal = jest.fn()

describe("Testando o ProductCard", () => {
    
    beforeEach(() => {
        axios.mockReset()
        // resetando o mock para garantir que os mokcs sempre vão iniciar como o original
    })

    test('Deve renderizar os elementos da pokecard', async () => {
        axios.get.mockResolvedValueOnce(pokemonApiMock)

        render(<Pokecard/>)
        await waitFor(() => {})

        screen.logTestingPlaygroundURL()
    })
})