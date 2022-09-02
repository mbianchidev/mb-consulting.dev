import {gql} from 'graphql-request';
import { hygraph } from '../index';

const query = gql`
query getAllServices {
    services {
      title
      slug
      serviceImage {
        url(transformation: {document: {output: {format: jpg}}})
      }
    }
  }
`

export default () => hygraph(query);