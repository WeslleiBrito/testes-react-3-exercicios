import { pokemonApiMock } from "./mocks/pokemonMock";
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios'; // temos que importar o módulo aqui também
import userEvent from "@testing-library/user-event";
import Pokecard from "../components/Pokecard";

jest.mock('axios')
const openModalMock = jest.fn()


describe("Testando o ProductCard", () => {
    
    beforeEach(() => {
        axios.mockReset()
        // resetando o mock para garantir que os mokcs sempre vão iniciar como o original
    })

    test('Deve renderizar os elementos da pokecard', async () => {
        axios.get.mockResolvedValueOnce(pokemonApiMock)

        render(<Pokecard />)
        await waitFor(() => {})

        screen.logTestingPlaygroundURL()
    })

    test('Deve executar a função que habilita o modal', async () => {
        const user = userEvent.setup()
        axios.get.mockResolvedValueOnce(pokemonApiMock)

        render(<Pokecard openModal={openModalMock}/>)
        await waitFor(() => {})

        const card = screen.getByRole('article')
        await user.click(card)

        screen.logTestingPlaygroundURL()
    })
})