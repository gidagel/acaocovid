import React, { useState, useEffect } from 'react'
import Layout from '../../components/layouts'
import { dadosIPC } from '../../components/DadosIPC'
import { withPreview } from 'gatsby-source-prismic'
import MUIDataTable from "mui-datatables";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

const columns = [
  {
    name: "cidade",
    label: "Cidade",
    options: {
      filter: true,
      sort: false
    },
  },
  {
    name: "bairro",
    label: "Bairro",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "ipc",
    label: "IPC",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "classIPC",
    label: "Classe do IPC",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "idh",
    label: "IDH",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "classIDH",
    label: "Classe do IDH",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "densidade",
    label: "Densidade",
    options: {
      filter: false,
      sort: false,
    },
  }
];

const options = {
  filterType: "checkbox",
  download: "false",
  print: "false",
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 20],
  selectableRows: "none",
  textLabels: {
    body: {
      noMatch: "Desculpe, não encontramos nenhum resultado.",
      toolTip: "Ordenar",
      columnHeaderTooltip: column => `Ordernar por ${column.label}`
    },
    pagination: {
      next: "Próxima",
      previous: "Anterior",
      rowsPerPage: "Número de linhas:",
      displayRows: "de",
    },
    toolbar: {
      search: "Procurar",
      downloadCsv: "Download CSV",
      print: "Imprimir",
      viewColumns: "Ver colunas",
      filterTable: "Filtrar tabela",
    },
    filter: {
      all: "Todos",
      title: "Filtros",
      reset: "Resetar",
    },
    viewColumns: {
      title: "Mostrar Colunas",
      titleAria: "Mostrar/Esconder Colunas",
    },
    selectedRows: {
      text: "linha(s) selecionadas",
      delete: "Deletar",
      deleteAria: "Deletar linha selecionada",
    },
  }
};

export const SimulatorVacinePage = () => {
  const size = useWindowSize()

  return (
    <Layout>
      <div className="simulator">
        {size.width > 728 && (
          <iframe
            src="https://gidagel.github.io/simuladorcovidvacina/"
            scrolling="yes"
            frameBorder="0"
            width="940px"
            height="550px"
          />
        )}
        {size.width < 728 && (
          <iframe
            src="https://gidagel.github.io/simuladorcovidvacinamobile/"
            scrolling="yes"
            frameBorder="0"
            width="100%"
            height="1450px"
          />
        )}
      </div>
      <MUIDataTable
      title={"Tabela 1: Índice de Proteção ao Covid-19"}
      data={dadosIPC}
      columns={columns}
      options={options}
    />
    </Layout>
  )
}

export default withPreview(SimulatorVacinePage)
