import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import Blog from '@/models/blogModel';

connect();

export async function POST(req: NextRequest) {
  try {
    const { title, description, imageUrl } = await req.json();
    
    // Validate input
    if (!title || !description || !imageUrl) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newBlog = new Blog({
      title,
      description,
      imageUrl,
    });

    const savedBlog = await newBlog.save();

    console.log('Saved Blog:', savedBlog); 

    return NextResponse.json({
      message: 'Blog saved successfully',
      data: savedBlog,
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error saving blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const allBlogs = await Blog.find();
    return NextResponse.json(allBlogs, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    // Validate input
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
