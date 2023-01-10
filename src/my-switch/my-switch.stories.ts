import { html } from 'lit';
import './index';

export default {
  title: 'Components/Switch',
  component: 'my-switch',
  argTypes: {
    labelPosition: {
      control: { type: 'radio' },
      options: ['top', 'start', 'end', 'bottom'],
    },
  },
  parameters: {
    actions: {
      handles: ['switchchange'],
    },
  },
};

const DefaultTemplate = (args: any) => {
  return html` <style>
      my-switch {
        --size: ${args['--size']};
      }
    </style>
    <my-switch
      label="${args.label}"
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      label-position=${args.labelPosition}
    ></my-switch>`;
};

export const Default: any = DefaultTemplate.bind({});

Default.args = {
  label: 'Test',
  labelPosition: 'top',
  ['--size']: '1rem',
};

const ExternalInteractionTemplate = () => {
  return html`
    <button class="toggle-button">Toggle</button>
    <br />
    <br />
    <my-switch label="Toggle Example"></my-switch>
    <script>
      const button = document.querySelector('.toggle-button');
      const mySwitch = document.querySelector('my-switch');
      button.addEventListener('click', () => mySwitch.toggle());
    </script>
  `;
};

export const ExternalInteraction: any = ExternalInteractionTemplate.bind({});

ExternalInteraction.args = {};

const IconDemoTemplate = () => {
  return html`
    <style>
      my-switch {
        --size: 3rem;
      }
    </style>
    <my-switch label="Icon Demo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" slot="checked" class="switch-icon">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"
        />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" slot="unchecked" class="switch-icon">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"
        />
      </svg>
    </my-switch>
  `;
};

export const IconDemo: any = IconDemoTemplate.bind({});

IconDemo.args = {};

const PartsDemoTemplate = () => {
  return html`
    <style>
      my-switch {
        --size: 3rem;
      }

      my-switch::part(control) {
        background-color: pink;
        padding: 1rem;
      }

      my-switch::part(track) {
        border-radius: 0;
      }

      my-switch::part(switch) {
        border-radius: 0;
      }
    </style>
    <my-switch label="Parts Demo"></my-switch>
  `;
};

export const PartsDemo: any = PartsDemoTemplate.bind({});

PartsDemo.args = {};
