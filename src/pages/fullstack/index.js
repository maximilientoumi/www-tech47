/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { css } from 'react-emotion';
import { Box } from '../../components/Layout';
import colors from '../../utils/colors';

const blogTheme = css`
  max-width: 900px;
  margin: 4.5rem auto 4.5rem auto;
  p {
    color: ${colors.sixth};
  }
  a {
    color: ${colors.primary};
  }
`;

const Fullstack = ({ data }) => {
  const { markdownRemark: remark } = data;
  return (
    <div className={blogTheme}>
      <Box css="margin: auto 16px auto 16px;">
        <h1>{remark.frontmatter.title}</h1>
        <div
          css="text-align: left; a { color : #02a9f7;}"
          dangerouslySetInnerHTML={{ __html: remark.html }}
        />
      </Box>
    </div>
  );
};

export const fullstackQuery = graphql`
  query fullstackQuery {
    markdownRemark(
      fileAbsolutePath: { regex: "src/pages/fullstack/fullstack.md/" }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Fullstack;
