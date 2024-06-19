<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GelleryStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'description' => 'required|string',
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:10048',
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'description' => 'required|string',
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:10048',
            ];
        }
    }


    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required!',
                'image.required' => 'Image is required!',
                'description.required' => 'description',
                'url.required' => 'description',

            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'description.required' => 'description is required!'
            ];
        }
    }
}
