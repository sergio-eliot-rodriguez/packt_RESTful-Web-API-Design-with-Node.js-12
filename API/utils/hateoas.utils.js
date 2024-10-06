/**
 * Generate links related to entity
 * @param {*} entity
 * @param {string} url
 */
export const generateSelf = ({ url, entity }) => {//14
  const self = [
    {
      href: `${url}/api/v2/contacts${entity ? `/${entity._id}` : "{?offset,limit}"}`,
      method: "GET",
      rel: "self"
    }
  ];

  if (entity) {
    const selfRef = [
      ...self,
      {
        href: `${url}/contacts/${entity._id}`,
        method: "PUT",
        rel: "update"
      },
      {
        href: `${url}/contacts/${entity._id}`,
        method: "DELETE",
        rel: "delete"
      },
      {
        href: `${url}/api/v2/contacts/${entity._id}/image`,
        method: "POST",
        rel: "image"
      }
    ];    
    return selfRef;
  }
  return self;
};
