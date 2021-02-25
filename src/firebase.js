import env from 'env'
import firebase from 'firebase/app'
import dev from './dev.json'
import prod from './prod.json'

import 'firebase/analytics'
import 'firebase/performance'

firebase.initializeApp(env.isProd ? prod : dev)

export default firebase
