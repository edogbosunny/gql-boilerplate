import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typesMerged = mergeTypes(fileLoader(path.join(__dirname, './')));
export default typesMerged;
