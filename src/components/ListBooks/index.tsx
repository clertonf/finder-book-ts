import { BookDTO } from "../../dtos/BookDTO";
import { Book } from "../Book";

import * as S from "./styles";

export function ListBooks() {
  const data: BookDTO[] = [
    {
      id: "8f41b92c7460b9337660427e",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },
    {
      id: "8f41b92c7460b9337660427e1",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },

    {
      id: "8f41b92c7460b93376604271e1",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },

    {
      id: "8f41b92c7460b9337660427e3",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },
    {
      id: "8f41b92c7460b9337660427e11",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },

    {
      id: "8f41b92c7460b93376604271e12",
      title: "A Culpa é das Estrelas",
      description:
        "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
      authors: ["Jonh Green"],
      pageCount: 288,
      category: "Romance",
      imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg",
      isbn10: "0062856626",
      isbn13: "978-0062856623",
      language: "Inglês",
      publisher: "Intrínseca",
      published: 2002,
    },
  ];

  return (
    <>
      <S.ListBooks
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Book data={item} />}
      />
    </>
  );
}
