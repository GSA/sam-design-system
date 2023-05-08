import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { VideoPlayerConfigurableModule } from './video-player-configurable/video-player-configurable.module';
import { VideoPlayerCaptionModule } from './video-player-caption/video-player-caption.module';
import { VideoPlayerDebugModule } from './video-player-debug/video-player-debug.module';
import { VideoPlayerDescriptionModule } from './video-player-description/video-player-description.module';
import { VideoPlayerSeekIntervalModule } from './video-player-seek-interval/video-player-seek-interval.module';
import { VideoPlayerPosterModule } from './video-player-poster/video-player-poster.module';
import { VideoPlayerPreloadModule } from './video-player-preload/video-player-preload.module';
import { VideoPlayerCrossOriginModule } from './video-player-cross-origin/video-player-cross-origin.module';
import { VideoPlayerIntroductionModule } from './video-player-introduction/video-player-introduction.module';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Video Player',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        VideoPlayerConfigurableModule,
        VideoPlayerCaptionModule,
        VideoPlayerDebugModule,
        VideoPlayerDescriptionModule,
        VideoPlayerSeekIntervalModule,
        VideoPlayerPosterModule,
        VideoPlayerPreloadModule,
        VideoPlayerCrossOriginModule,
        VideoPlayerIntroductionModule,
      ],
    }),
  ],
  argTypes: {},
} as Meta;

const videoConfigFunction = (
  sourceWebm: string,
  sourceMp4: string,
  height: string,
  width: string,
  caption: string,
  poster: string,
  id: string,
  seekInterval: number,
  debug: boolean,
  preload: string,
  description: string
) => {
  return {
    sourceWebm: sourceWebm ?? '',
    sourceMp4: sourceMp4 ?? '',
    height: height ?? '',
    width: width ?? '',
    caption: caption ?? '',
    poster: poster ?? '',
    id: id ?? '',
    seekInterval: seekInterval ?? 20,
    debug: debug ?? true,
    preload: preload ?? '',
    description: description ?? '',
  };
};
const Template: Story = (args) => {
  const { sourceWebm, sourceMp4, height, width, caption, poster, id, seekInterval, debug, preload, description } = args;
  let config = videoConfigFunction(
    sourceWebm,
    sourceMp4,
    height,
    width,
    caption,
    poster,
    id,
    seekInterval,
    debug,
    preload,
    description
  );
  return {
    template: `<sds-video-player-configurable [videoData]="configObj" [crossorigin]="crossorigin"></sds-video-player-configurable>`,
    props: {
      configObj: config,
      ...args,
    },
  };
};

export const Introduction: Story = (args) => ({
  template: `<sds-video-player-introduction></sds-video-player-introduction>`,
  props: {
    ...args,
  },
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: { disabled: true },
};

export const Configurable = Template.bind({});
Configurable.args = {
  sourceWebm: '',
  sourceMp4: 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
  height: 'auto',
  width: '100%',
  caption: 'assets/video/gsa-sample.vtt',
  poster: 'https://github.com/GSA/sam-static-content/raw/master/assets/images/gsa-sample.jpg',
  id: 'sampleId1',
  seekInterval: 20,
  debug: true,
  preload: 'none',
  description: 'GSA example video',
  crossorigin: '',
};
Configurable.parameters = {
  preview: { disabled: true },
};

export const Caption: Story = (args) => ({
  template: `<sds-video-player-caption></sds-video-player-caption>`,
  props: {
    ...args,
  },
});
Caption.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-caption',
    'VideoPlayerCaptionModule',
    'sds-video-player-caption',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'caption'),
};

export const Debug: Story = (args) => ({
  template: `<sds-video-player-debug></sds-video-player-debug>`,
  props: {
    ...args,
  },
});
Debug.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-debug',
    'VideoPlayerDebugModule',
    'sds-video-player-debug',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'debug'),
};

export const Description: Story = (args) => ({
  template: `<sds-video-player-description></sds-video-player-description>`,
  props: {
    ...args,
  },
});
Description.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-description',
    'VideoPlayerDescriptionModule',
    'sds-video-player-description',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'description'),
};

export const Poster: Story = (args) => ({
  template: `<sds-video-player-poster></sds-video-player-poster>`,
  props: {
    ...args,
  },
});
Poster.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-poster',
    'VideoPlayerPosterModule',
    'sds-video-player-poster',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'poster'),
};

export const PreLoad: Story = (args) => ({
  template: `<sds-video-player-preload></sds-video-player-preload>`,
  props: {
    ...args,
  },
});
PreLoad.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-preload',
    'VideoPlayerPreloadModule',
    'sds-video-player-preload',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'preload'),
};

export const SeekInterval: Story = (args) => ({
  template: `<sds-video-player-seek-interval></sds-video-player-seek-interval>`,
  props: {
    ...args,
  },
});
SeekInterval.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-seek-interval',
    'VideoPlayerSeekIntervalModule',
    'sds-video-player-seek-interval',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'seek-interval'),
};

export const CrossOrigin: Story = (args) => ({
  template: `<sds-video-player-seek-interval></sds-video-player-seek-interval>`,
  props: {
    ...args,
  },
});
CrossOrigin.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/video-player/video-player-cross-origin',
    'VideoPlayerCrossOriginModule',
    'sds-video-player-cross-origin',
    []
  ),
  stackblitzLink: generateStackblitzLink('video-player', 'cross-origin'),
};

export const __namedExportsOrder = [
  'Introduction',
  'Configurable',
  'Caption',
  'CrossOrigin',
  'Debug',
  'Description',
  'Poster',
  'PreLoad',
  'SeekInterval',
];
