import { type SchemaTypeDefinition } from 'sanity'

import resource from './schemas/resource.schema';
import resourcePlaylist from './schemas/resource-playlist.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resource, resourcePlaylist],
}
