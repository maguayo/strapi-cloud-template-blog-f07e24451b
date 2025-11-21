import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAlert extends Struct.ComponentSchema {
  collectionName: 'components_shared_alerts';
  info: {
    description: '';
    displayName: 'Alert';
    icon: 'expand';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    theme: Schema.Attribute.Enumeration<
      ['primary', 'success', 'warning', 'danger']
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'expand';
  };
  attributes: {
    button_link: Schema.Attribute.String & Schema.Attribute.Required;
    button_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    theme: Schema.Attribute.Enumeration<
      ['primary', 'success', 'warning', 'danger']
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImageText extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_texts';
  info: {
    description: '';
    displayName: 'Image / Text';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_right: Schema.Attribute.Boolean;
    text: Schema.Attribute.RichText;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.alert': SharedAlert;
      'shared.cta': SharedCta;
      'shared.image-text': SharedImageText;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
