import CourseDetailClient from './CourseDetailClient'

interface CourseDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params

  return <CourseDetailClient courseId={id} />
}