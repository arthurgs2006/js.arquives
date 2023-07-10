
import {inline} from 'inline.js'
import defaultInLine from 'inline.js'
 
import exportDefault, {group, a, b, c, d} from 'non-inline.js'
inline()
defaultInLine()

group()
exportDefault()