import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: green,
    error: red
  }
})
