import {gql} from 'graphql-request';
import { hygraph } from '../index';

//TODO find way to pass the single slug
//TIP: use graphql variables $slug: String! etc.

const query = gql`
query getServiceBySlug($slug: String!) {
    service(where: {slug: "$slug"}) {
      title
      slug
      serviceDescription
      serviceImage {
        url(transformation: {document: {output: {format: webp}}})
      }
      startingFromRate
    }
  }
`

export default () => hygraph(query);