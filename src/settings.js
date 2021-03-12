import * as f from 'f'

export default f.or(f.prop('__settings.firebase', window), {})
