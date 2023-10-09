import { Genres } from '@constants/Genres'
import { getFirstChannelNumber } from '@data/epg/AllChannels'
import { navigate } from 'gatsby'
import querystring from 'query-string'
import { ListItem } from '../Menu'

function navigateToEpg(genre?: Genres) {
  const startingNumber = getFirstChannelNumber(genre)

  const query = {
    start: startingNumber,
    genre,
  }

  getFirstChannelNumber(genre)

  navigate(`/epg/channel-list/?${querystring.stringify(query, { skipNull: true })}`)
}

export const tvGuideListItems: ListItem[] = [
  {
    text: 'Todos los canales',
    onClick: () => {
      navigateToEpg()
    },
  },
  {
    text: 'Entretenimiento',
    onClick: () => {
      navigateToEpg(Genres.Entertainment)
    },
  },
  {
    text: 'Estilo de vida y cultura',
    onClick: () => {
      navigateToEpg(Genres.LifestyleAndCulture)
    },
  },
  {
    text: 'Películas',
    onClick: () => {
      navigateToEpg(Genres.Movies)
    },
  },
  {
    text: 'Deportes',
    onClick: () => {
      navigateToEpg(Genres.Sports)
    },
  },
  {
    text: 'Noticias',
    onClick: () => {
      navigateToEpg(Genres.News)
    },
  },
  {
    text: 'Documentales',
    onClick: () => {
      navigateToEpg(Genres.Documentaries)
    },
  },
  {
    text: 'Infantil',
    onClick: () => {
      navigateToEpg(Genres.Kids)
    },
  },
  {
    text: 'Música',
    onClick: () => {
      navigateToEpg(Genres.Music)
    },
  },
  {
    text: 'Radio',
    onClick: () => {
      navigateToEpg(Genres.Radio)
    },
  },
  {
    text: 'Compras',
    onClick: () => {
      navigateToEpg(Genres.Shopping)
    },
  },
  {
    text: 'Religión',
    onClick: () => {
      navigateToEpg(Genres.Religion)
    },
  },
  {
    text: 'Internacional',
    onClick: () => {
      navigateToEpg(Genres.International)
    },
  },
  {
    text: 'Juegos y citas',
    onClick: () => {
      navigateToEpg(Genres.GamingAndDating)
    },
  },
  {
    text: 'Especialista',
    onClick: () => {
      navigateToEpg(Genres.Specialist)
    },
  },
  {
    text: 'No recomendado para menores de 18 años.',
    onClick: () => {
      navigateToEpg(Genres.Adult)
    },
  },
]

export const boxOfficeListItems: ListItem[] = [
  {
    text: 'Películas por hora de inicio',
    onClick: () => {},
  },
  {
    text: 'Películas A-Z',
    onClick: () => {},
  },
  {
    text: 'Nuevas películas',
    onClick: () => {},
  },
  {
    text: 'Eventos deportivos',
    onClick: () => {},
  },
  {
    text: 'Vistas previas',
    onClick: () => {},
  },
  {
    text: 'Pago de adulto por noche',
    onClick: () => {},
  },
  {
    text: 'Adult movies',
    onClick: () => {},
  },
]

export const servicesListItems: ListItem[] = [
  {
    text: 'Usando DVR',
    onClick: () => {
      navigate('/services/using-sky-plus')
    },
  },
  {
    text: 'Números telefónicos',
    onClick: () => {
      navigate('/services/telephone-numbers')
    },
  },
  {
    text: 'Control parental',
    onClick: () => {},
  },
  {
    text: 'Configuración del sistema',
    onClick: () => {},
  },
  {
    text: 'Configuración del DVR',
    onClick: () => {
      navigate('/services/sky-plus-setup')
    },
  },
  {
    text: 'Configuración a la carta',
    onClick: () => {},
  },
  {
    text: 'Espera automática',
    onClick: () => {},
  },
  {
    text: 'Grabación manual',
    onClick: () => {},
  },
  {
    text: 'Canales favoritos',
    onClick: () => {},
  },
  {
    text: 'Otros canales',
    onClick: () => {},
  },
]

export const interactiveListItems: ListItem[] = [
  {
    text: 'mi Orange',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'mi Orange' } })
    },
  },
  {
    text: 'QVC',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'QVC' } })
    },
  },
  {
    text: 'Cinebank 24H',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Cinebank 24H' } })
    },
  },
  {
    text: 'Vacaciones de teletexto',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Vacaciones de teletexto' } })
    },
  },
  {
    text: 'Servicio de atención al cliente Orange',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Servicio de atención al cliente Orange' } })
    },
  },
  {
    text: 'Juegos Orange',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Juegos Orange' } })
    },
  },
  {
    text: 'Ladbrokes Betting & Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Apuestas y juegos de Ladbrokes' } })
    },
  },
  {
    text: 'Directgov',
    onClick: () => {
      navigate('/interactive/coming-next', {
        state: {
          serviceName: 'Directgov',
          serviceDescription: 'Public services all in one place',
          nextUrl: '/interactive/services/directgov',
        },
      })
    },
  },
  {
    text: 'Sky Bet, Vegas & Sky Poker',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Sky Bet, Vegas & Sky Poker' } })
    },
  },
  {
    text: 'GoPlayTV Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'GoPlayTV Games' } })
    },
  },
  {
    text: 'YO–YO"',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'YO–YO"' } })
    },
  },
]
