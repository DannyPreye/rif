import React from 'react'
import EachProject from './EachProject';
import { data } from 'autoprefixer';

const Main = ({projects}) => {
  return (
    <div class="blog events event-page">
            <div class="container">
              <div class="row items-stretch gap-3 justify-center" >
                  {
                      projects.map((project) => (

                          <EachProject
                              link={`/past-project/${project.uid}`}

                              location={"Warri"}
                              img={project?.data?.featured_image?.url}

                              date={project?.data?.project_date}
                              title={project?.data?.title}

                          />
                      ))
                  }


                    <div class="col-xl-12">
                        <div class="paigenition">
                            <ul>
                                <li><a href="#0">1</a></li>
                                <li><a href="#0">2</a></li>
                                <li><a href="#0">3</a></li>
                              <li>
                                  <a href="#0">
                                      <i class="flaticon-right-arrow-1"></i>
                                  </a>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main
