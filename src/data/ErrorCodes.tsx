import React from 'react'

/**
 * List of known Sky error codes.
 *
 * Not complete at all.
 */
enum ErrorCodes {
  NO_CARD_INSERTED = 1,
  CARD_READ_ERROR = 2,
  CARD_CHECK_FAIL = 3,
  UNAUTHORISED_CARD = 6,
  /**
   * CP01 on Sky+HD R010 and newer
   */
  UNPAIRED_CARD = 7,
  ENCRYPTION_KEY_FAILURE = 8,
  UNAUTHORISED_CARD_2 = 9,
  NO_SATELLITE_SIGNAL = 28,
  NO_SATELLITE_SIGNAL_2 = 29,
}

export const ErrorText = {
  [ErrorCodes.NO_CARD_INSERTED]: <>Inserta tu tarjeta inteligente Orange</>,
  [ErrorCodes.NO_SATELLITE_SIGNAL]: (
    <>
      No se recibe señal de satélite.
      <br />
      Desenchufe su caja de la red eléctrica, luego vuelva a enchufarla y espere 5 minutos antes de volver a intentarlo..
      <br />
      Si el fallo persiste contacte con atención al cliente.
    </>
  ),
  [ErrorCodes.NO_SATELLITE_SIGNAL_2]: (
    <>
      No se recibe señal de satélite.
      <br />
      Desenchufe su caja de la red eléctrica, luego vuelva a enchufarla y espere 5 minutos antes de volver a intentarlo..
      <br />
      Si el fallo persiste contacte con atención al cliente.
    </>
  ),
} as const

export default ErrorCodes
