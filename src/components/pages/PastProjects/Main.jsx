import React from 'react';
import EachProject from './EachProject';
import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Main = ({ projects, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const pathname = router.asPath.split('/page')[0];

  console.log('shjsghg', pathname);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div class='blog events event-page'>
      <div class='container'>
        <div class='row items-stretch justify-start  '>
          {projects.map((project) => (
            <EachProject
              link={`/past-project/${project.uid}`}
              location={project?.data?.location}
              img={project?.data?.featured_image?.url}
              date={project?.data?.project_date}
              title={project?.data?.title}
            />
          ))}

          <div class='col-xl-12'>
            <div class='paigenition'>
              <ul>
                {pageNumbers.map((page) => (
                  <li key={`page_${page}`}>
                    <Link href={`${pathname}/page/${page}`}>{page}</Link>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li>
                    <Link href={`${pathname}/page/${currentPage + 1}`}>
                      <i class='flaticon-right-arrow-1'></i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
