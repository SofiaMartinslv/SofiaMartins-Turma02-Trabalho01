const Biblioteca = require("../src/Trabalho01Turma02");

describe('Testes da classe Biblioteca', () => {
    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca();
    });

    test('Deve adicionar livros corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' }
        biblioteca.adicionarLivro(livro);

        expect(biblioteca.listarLivros()).toEqual([livro]);
    });

    test('Deve remover livros corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' }
        biblioteca.adicionarLivro(livro);
        biblioteca.removerLivro(livro.id);

        expect(biblioteca.listarLivros()).not.toContain(livro);
    });

    test('Deve buscar livros por id corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' };
        biblioteca.adicionarLivro(livro);

        expect(biblioteca.buscarLivroPorId(livro.id)).toBe(livro);
    });

    test('Deve buscar livros por titulo corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' };
        biblioteca.adicionarLivro(livro);

        expect(biblioteca.buscarLivroPorTitulo(livro.titulo)).toEqual([livro]);
    });

    test('Deve adicionar membros corretamente', () => {
        const membro = { id: 1, nome: 'Sofia' }
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.listarMembros()).toEqual([membro]);
    });

    test('Deve remover membros corretamente', () => {
        const membro = { id: 1, nome: 'Sofia' }
        biblioteca.adicionarMembro(membro);
        biblioteca.removerMembro(membro.id);

        expect(biblioteca.listarMembros()).not.toContain(membro);
    });

    test('Deve buscar membros por id corretamente', () => {
        const membro = { id: 1, nome: 'Sofia' };
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.buscarMembroPorId(membro.id)).toBe(membro);
    });

    test('Deve emprestar livros corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' };
        const membro = { id: 1, nome: 'Sofia' };

        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarLivro(livro);

        biblioteca.emprestarLivro(livro.id, membro.id)
        expect(biblioteca.listarLivrosEmprestados()).toContain(livro)
    })

    test('Deve devolver livros corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito' };
        const membro = { id: 1, nome: 'Sofia' };

        biblioteca.adicionarMembro(membro);
        biblioteca.adicionarLivro(livro);
        biblioteca.emprestarLivro(livro.id, membro.id)

        biblioteca.devolverLivro(livro.id)
        expect(biblioteca.listarLivrosEmprestados()).not.toContain(livro)
    })

    test('Deve listar livros disponíveis corretamente', () => {
        const livro1 = { id: 1, titulo: 'Orgulho e preconceito', emprestado: false }
        const livro2 = { id: 3, titulo: 'Percy Jackson e o Ladrão de Raios', emprestado: false }
        const livro3 = { id: 2, titulo: 'É assim que se perde a guerra do tempo', emprestado: true }

        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);

        expect(biblioteca.listarLivrosDisponiveis()).toEqual([livro1, livro2])
    })

    test('Deve contar livros corretamente', () => {
        const livro1 = { id: 1, titulo: 'Orgulho e preconceito', emprestado: false }
        const livro2 = { id: 3, titulo: 'Percy Jackson e o Ladrão de Raios', emprestado: false }
        const livro3 = { id: 2, titulo: 'É assim que se perde a guerra do tempo', emprestado: true }

        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);

        expect(biblioteca.contarLivros()).toBe(3)
    })

    test('Deve contar membros corretamente', () => {
        const membro1 = { id: 1, nome: 'Sofia' }
        const membro2 = { id: 2, nome: 'Eduardo' }
        const membro3 = { id: 3, nome: 'Renata' }

        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);
        biblioteca.adicionarMembro(membro3);

        expect(biblioteca.contarMembros()).toBe(3)
    })

    test('Deve listar livros por autor corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito', genero: 'Romance' }
        biblioteca.adicionarLivro(livro);

        expect(biblioteca.listarLivrosPorGenero('Romance')).toContain(livro)
    })

    test('Deve atualizar livros corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito', emprestado: false, autor: 'Jane Austen', genero: 'Romance' }
        biblioteca.adicionarLivro(livro);
        biblioteca.atualizarInformacaoLivro(livro.id, { genero: 'Drama' })

        expect(biblioteca.buscarLivroPorId(1).genero).toBe('Drama');
    })

    test('Deve litar livros por ano corretamente', () => {
        const livro = { id: 1, titulo: 'Orgulho e preconceito', ano: 1813}
        biblioteca.adicionarLivro(livro);

        expect(biblioteca.listarLivrosPorAno(1813)).toContain(livro);
    })
});