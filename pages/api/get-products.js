const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "http://dev.rtam.lt",
    consumerKey: "ck_500684dcf48cdbfa3beae66b18f7e63d665972b2",
    consumerSecret: "cs_fa24bf08397fd94fc4997c1d8810613a4d7a47b5",
  version: "wc/v3"
});

export default async function handler(req, res) {
	
	const responseData = {
		success: false,
		products: []
	}
	
	const { perPage } = req?.query ?? {};
	
	try {
		const { data } = await api.get(
			'products',
			{
				per_page: perPage || 50
			}
		);
		
		responseData.success = true;
		responseData.products = data;
		
		res.json( responseData );
		
	} catch ( error ) {
		responseData.error = error.message;
		res.status( 500 ).json( responseData  );
	}
}