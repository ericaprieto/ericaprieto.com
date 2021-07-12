import moment from "moment"
import "moment/locale/pt-br"

moment.locale("pt-br")

const formatDate = (date) => moment(date).format("LL")

export default formatDate
