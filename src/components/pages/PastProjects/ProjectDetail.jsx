import { PrismicRichText } from '@prismicio/react';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import RichText from '../../RichText';

const ProjectDetail = ({ details }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentIMage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(details);
  return (
    <div class='my-12'>
      <div class='event-card'>
        <div class=' causes-image-container cause-details-container event-details-container rounded-lg bg-gradient-to-t from-black to-transparent'>
          <div
            class='causes-image-overlay wow animated relative'
            style={{ visibility: 'visible', animationName: ' panel' }}
          ></div>
          <div class='causes-image cause-details-image '>
            <Image
              className='object-contain'
              fill
              src={details.data?.featured_image?.url}
              alt='img'
            />
            <div class='day-7'>
              <h3>{new Date(details?.data?.project_date).getDate()}</h3>
              <h6>{moment(details?.data?.project_date).format('MMMM YYYY')}</h6>
            </div>
          </div>
        </div>
      </div>

      <div class='event-card'>
        <div class='causes-bar-details'>
          <div class='causes-bar-info event-details-bar-info'>
            <p>
              <i class='flaticon-pin'></i>
              {details?.data?.location}
            </p>
          </div>
        </div>
      </div>

      <div class='main-causes-content'>
        <div class='causes-details-title'>
          <h3>{details?.data?.title}</h3>
        </div>

        <RichText field={details?.data?.description} />
      </div>
      <div class='main-causes-content'>
        <div class='causes-details-title event-details-title-1 ml-3'>
          <h3>Images from the event </h3>
        </div>
        <div class='row  '>
          {details?.data?.images?.map((item, index) => (
            <div class='col-xl-4 col-md-6 relative mt-2  '>
              <div
                class='gallery-content wow fadeInUp animated
                relative h-[350px]   overflow-hidden rounded-[12px] bg-gradient-to-t from-black to-transparent'
                data-wow-delay='600ms'
                data-wow-duration='1500ms'
                style={{
                  visibility: 'visible',
                  animationDuration: '1500ms',
                  animationDelay: '600ms',
                  animationName: 'fadeInUp',
                }}
              >
                <div class='team-content-wrapper  '>
                  <Image
                    width={item?.image?.dimensions?.width}
                    height={item?.image?.dimensions?.height}
                    src={item?.image.url}
                    className='h-[100%] object-contain'
                    alt='image'
                  />
                  <div class='team-icon team3-icon'>
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            setOpenModal(true);
                            setCurrentImage(item?.image.url);
                            setCurrentImageIndex(index);
                          }}
                          class='team-icon-plus lightbox-image cursor-pointer'
                          data-fancybox='gallery'
                        >
                          <i class='flaticon-plus'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        currentImageIndex={currentImageIndex}
        currentIMage={currentIMage}
        images={details?.data?.images}
      />
    </div>
  );
};

const Modal = ({ open, setOpen, currentImageIndex, images, currentIMage }) => {
  const [index, setIndex] = useState(currentImageIndex);

  const handleNextIMage = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  useEffect(() => {
    if (open) {
      setIndex(currentImageIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed left-0 top-0 z-[999] flex h-screen w-full flex-col items-center justify-center
       bg-[#706f6f59] backdrop-blur-md ${open ? 'block' : 'hidden'}`}
    >
      <div className='relative z-10 h-[450px] w-[80%] max-w-[450px] overflow-hidden rounded-md'>
        <Image
          fill
          src={images[index]?.image.url}
          alt='image'
          className='object-contain'
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className='container absolute
       bottom-0 top-0 m-auto flex h-fit
        items-center justify-between px-3'
      >
        <button
          data-fancybox-prev=''
          class='fancybox-button fancybox-button--arrow_left'
          title='Previous'
          onClick={handlePrevious}
        >
          <svg viewBox='0 0 40 40'>
            <path d='M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20'></path>
          </svg>
        </button>
        <button
          data-fancybox-next=''
          class='fancybox-button fancybox-button--arrow_right'
          title='Next'
          onClick={handleNextIMage}
        >
          <svg viewBox='0 0 40 40'>
            <path d='M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
