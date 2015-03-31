import items from './items';
import health from './health';

export default function(app) {
  items(app);
  health(app);
}