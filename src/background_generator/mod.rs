pub mod colors;
pub mod hex;

pub mod background_generator {
	use getrandom::getrandom;
	use js_sys::{Array as JsArray, JsString};
	use wasm_bindgen::prelude::*;

	use crate::background_generator::{
		colors::colors::{methods::*, *},
		hex::hex::*,
	};

	#[wasm_bindgen]
	/// returns a random color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = get_random_color();
	/// ```
	/// output: `blue`
	pub fn random_color() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_index = rng[0] as usize % COLORS_ARRAY.len();
		let color: String = COLORS_ARRAY[color_index].to_string();

		JsString::from(color)
	}

	#[wasm_bindgen]
	/// returns a random shade from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let shade = get_random_shade();
	/// ```
	/// output: `600`
	pub fn random_shade() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY.len();
		let shade: String = COLOR_SHADES_ARRAY[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// returns a random dark shade from the tailwind css v2 palette
	/// ## Example:
	/// ```
	/// let shade = random_shade_dark();
	/// ```
	/// output: `800`
	/// ## Example:
	/// ```
	/// let shade = random_shade_dark();
	/// ```
	/// output: `900`
	pub fn random_shade_dark() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_DARK.len();
		let shade: String = COLOR_SHADES_ARRAY_DARK[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// returns a random light shade from the tailwind css v2 palette
	/// ## Example:
	/// ```
	/// let shade = random_shade_light();
	/// ```
	/// output: `200`
	/// ## Example:
	/// ```
	/// let shade = random_shade_light();
	/// ```
	/// output: `500`
	pub fn random_shade_light() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_LIGHT.len();
		let shade: String = COLOR_SHADES_ARRAY_LIGHT[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// generates a random tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates a random dark tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_dark();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_dark() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade_dark());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates a random light tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_light();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_light() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade_light());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates ```n``` random tw colors from the tailwind css v2 palette, where ```n``` is the
	/// first argument
	/// ## Arguments:
	/// * ```n``` - the number of colors to generate
	///
	/// * ```tol``` - the tolerance of the generated colors
	///
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(5);
	/// ```
	/// output: `["blue-600", "indigo-700", "pink-800", "purple-900", "red-500"]`
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(1);
	/// ```
	/// output: `["blue-600"]`
	pub fn random_tw_colors(n: i32, tolerance: u32) -> JsArray {
		// initialize an empty JsArray for the return value
		let colors_array = JsArray::new();

		// generate an initial value and convert to String
		let color_1: String = random_tw_color_dark().as_string().unwrap();
		// convert to &str
		let color_1: &str = &color_1;
		// convert the &str to a hex value (String)
		let color_1_hex = color_to_hex(color_1);
		// convert the String to &str
		let color_1_hex: &str = &color_1_hex;

		// push the initial value to the return array as a JsString
		colors_array.push(&JsString::from(color_1));

		let mut i = 1;
		while i < n {
			let color = random_tw_color_dark();
			// convert to String
			let color: String = color.as_string().unwrap();
			// convert to &str
			let color: &str = &color;
			// convert the &str to a hex value (String)
			let color_hex = color_to_hex(color);
			// convert the hex value to a &str
			let color_hex: &str = &color_hex;

			// check if the color clashes with the previous color in the array
			if compare_hex_tolerance(color_hex, color_1_hex, tolerance as u64) {
				// if it does not clash, push the color to the return array as a JsString
				colors_array.push(&JsString::from(color));
				i += 1;
			} else {
				// if it does clash, do nothing
				continue;
			}
		}

		colors_array
	}
}